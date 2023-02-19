import React, { useCallback, useEffect, useMemo, useState } from "react";
import Node from "./Node/Node";
import { Box, Button } from "@mui/material";
import {
  dijkstra,
  getAllNodes,
  getNodesInShortestPathOrder,
} from "../../algorithms/dijkstra";
import { depthFirstSearch } from "../../algorithms/maze";
import toast, { useToaster } from "react-hot-toast";
import { grey } from "@mui/material/colors";
import useDarkMode from "../../../../hooks/useDarkMode";

export type TypeNode = {
  row: number;
  col: number;
  isStart?: boolean;
  isFinish?: boolean;
  distance?: number;
  isVisited?: boolean;
  isWall?: boolean;
  previousNode?: TypeNode | null;
  isWeighted?: boolean;
};
export type NodeOption =
  | "isWall"
  | "isWeighted"
  | "isStart"
  | "isFinish"
  | "reset"
  | "isVisited";
export type Grid = TypeNode[][];
const colLength = 65;
const generateNodes = (blank?: boolean) => {
  const grid = [];
  let wall = true;
  for (let row = 0; row < 35; row++) {
    const currentRow = [];

    for (let col = 0; col < colLength; col++) {
      if (Boolean(row % 2)) {
        if (col === 0) {
          wall = false;
        }
        wall = !wall;
      } else {
        wall = true;
      }
      // wall = Boolean(row % 2) ? !wall : true;
      const currentNode = {
        col,
        row,
        isStart: row === 17 && col === 5,
        isFinish: row === 17 && col === 45,
        distance: Infinity,
        isVisited: false,
        isWall:
          (row === 17 && col === 5) || (row === 17 && col === 45)
            ? false
            : wall,
        // isWall:true,
        previousNode: null,
      };
      currentRow.push(currentNode);
    }
    grid.push(currentRow);
  }
  if (blank) {
    return grid.map((row) =>
      row.map((col) => ({
        ...col,
        isWall: false,
        isStart: false,
        isFinish: false,
      }))
    );
  }
  return depthFirstSearch(grid, grid[1][1]);
};
const PathFindingVisualizer = () => {
  const { toasts } = useToaster();
  const [blankGrid, setBlankGrid] = useState<boolean>(false);
  const [nodeOption, setNodeOption] = useState<NodeOption>("isWall");
  const [selectedKey, setSelectedKey] = useState<number>(0);
  const [animation, setAnimation] = useState<boolean>(false);
  const [state, setState] = useState<{
    grid: Grid;
    initialGrid: Grid;
    mousePressed?: boolean;
  }>({
    grid: [],
    initialGrid: [],
    mousePressed: false,
  });

  // useEffect(() => {

  //   // setNodes(path);
  // }, []);

  const handleGenerateNodes = useCallback((blank?: boolean) => {
    const grid = generateNodes(blank);
    const initialGrid = generateNodes();
    setState({ grid, initialGrid: initialGrid });
  }, []);
  useEffect(() => {
    handleGenerateNodes();
  }, []);
  const handleResetGrid = useCallback(
    (allNodes: TypeNode[], grid: Grid, initialGrid: Grid) => {
      allNodes.forEach((node) => {
        grid[node.row][node.col].isVisited = false;
        grid[node.row][node.col].previousNode = null;
        grid[node.row][node.col].distance = Infinity;
        initialGrid[node.row][node.col].isVisited = false;
        initialGrid[node.row][node.col].previousNode = null;
        initialGrid[node.row][node.col].distance = Infinity;
      });
    },
    []
  );
  const handleResetNodes = useCallback((allNodes: TypeNode[]) => {
    allNodes.forEach((node) => {
      const element: HTMLElement | null = document.getElementById(
        `node-${node.row}-${node.col}`
      );
      if (
        element?.className === "node node-shortest-path" ||
        element?.className === "node node-visited"
      ) {
        element.className = "node";
      }
    });
  }, []);
  const allNodes = useMemo(() => getAllNodes(state.grid), [state.grid]);
  const visualizeDijkstra = useCallback(() => {
    const { grid, initialGrid } = state;
    handleResetGrid(allNodes, grid, initialGrid);
    handleResetNodes(allNodes);
    const startNode = allNodes.find((item: TypeNode) => item.isStart);
    const finishNode = allNodes.find((item: TypeNode) => item.isFinish);
    if (!startNode) {
      if (!toasts.length) {
        toast.error("Don't forget to add a start point");
      }
      return;
    }
    if (!finishNode) {
      if (!toasts.length) {
        toast.error("Don't forget to add a finish point");
      }

      return;
    }
    setAnimation(true);
    setBlankGrid(false);
    const visitedNodesInOrder: any = dijkstra(grid, startNode, finishNode);
    const shortestPath = getNodesInShortestPathOrder(finishNode);
    handleAnimateDijkstra(visitedNodesInOrder, shortestPath);
  }, [state]);
  function handleAnimateDijkstra(
    visitedNodesInOrder: any[],
    shortestPath: any[]
  ) {
    for (let i = 0; i < visitedNodesInOrder?.length; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          handleAnimateShortestPath(shortestPath);
        }, 5 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const element: HTMLElement | null = document.getElementById(
          `node-${node.row}-${node.col}`
        );
        if (
          element &&
          element.className !== "node start-node" &&
          element.className !== "node finish-node"
        ) {
          element.className = "node node-visited";
        }
      }, 5 * i);
    }
  }
  const handleAnimateShortestPath = useCallback((shortestPath: any[]) => {
    for (let i = 0; i < shortestPath.length; i++) {
      if (i === shortestPath.length - 1) {
        setTimeout(() => {
          setAnimation(false);
        }, 50 * i);
        return;
      }
      setTimeout(() => {
        const node = shortestPath[i];
        const element: HTMLElement | null = document.getElementById(
          `node-${node.row}-${node.col}`
        );
        if (
          element &&
          element.className !== "node start-node" &&
          element.className !== "node finish-node"
        ) {
          element.className = "node node-shortest-path";
        }
      }, 50 * i);
    }
  }, []);

  const handleNodeOption = (nodeOption: NodeOption, id?: number) => {
    setNodeOption(nodeOption);
    if (id) {
      setSelectedKey(id);
    }
  };

  const [button, setButton] = useState(false);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    if (state.grid.length && !stop) {
      visualizeDijkstra();
      setStop(true);
    }
  }, [state.grid]);
  const { darkMode } = useDarkMode();

  return (
    <Box
      sx={{
        width: "100%",
        // height: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: darkMode ? grey[900] : "#fff",
        cursor: "pointer",
        transition: "all .3s ease",
        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
      onClick={() => !animation && visualizeDijkstra()}
      onMouseEnter={() => setButton(true)}
      onMouseLeave={() => setButton(false)}
    >
      {button && (
        <Button
          sx={{
            position: "absolute",
            textTransform: "none",
            bottom: -30,
            right: -30,
            zIndex: 9999,
            // color:"#fff",
            fontWeight: 700,
          }}
          size="small"
          color="primary"
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            handleGenerateNodes();
          }}
          disabled={animation}
        >
          Refresh maze
        </Button>
      )}
      <div
        style={{
          width: `100%`,
          display: "flex",
          flexWrap: "wrap",
          // outline: `1px solid ${blueGrey[900]}`,
        }}
        onMouseLeave={() => setState({ ...state, mousePressed: false })}
      >
        {state.grid.map((row: any, i: number) =>
          row.map((col: TypeNode, i: number) => (
            <Node
              key={i}
              node={col}
              setState={setState}
              state={state}
              nodeOption={nodeOption}
              colLength={colLength}
              blankGrid={blankGrid}
            />
          ))
        )}
      </div>
    </Box>
  );
};

export default PathFindingVisualizer;
