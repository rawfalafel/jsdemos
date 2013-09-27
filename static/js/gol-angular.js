function Grid($scope) {
    var gridSize = 10;

    var placeholder = {};
    function isFunction(o) {
        return o && placeholder.toString.call(o) === '[object Function]';
    }

    function createArray(contents) {
        var grid = [];
        for (var i = 0; i < gridSize; i++) {
            grid[i] = isFunction(contents) ? contents() : contents;
        }
        return grid;
    }

    function createGrid() {
        return createArray(function() {
            var arr = [];
            for (var i = 0; i < gridSize; i++) {
                arr[i] = 0;
            }
            return arr;
        });
    }

    function createEmptyGrid() {
        return createArray(function() {
            return [];
        });
    }

    function liveNeighbors(x, y) {
        var grid = $scope.grid, count = 0;

        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;

                var nX = x + dx, nY = y + dy;
                if (nX == -1) {
                    nX = gridSize-1;
                } else if (nX == gridSize) {
                    nX = 0;
                }
                if (nY == -1) {
                    nY = gridSize-1;
                } else if (nY == gridSize) {
                    nY = 0;
                }
                if (grid[nY][nX]) count++;
            }
        }

        return count;
    }

    $scope.grid = createGrid();

    $scope.toggle = function(x, y) {
        $scope.grid[y][x] = ($scope.grid[y][x] == 1) ? 0 : 1;
    };

    $scope.next = function() {
        var nextGrid = createEmptyGrid(), grid = $scope.grid;
        for (var i = 0; i < gridSize; i++) {
            for (var j = 0; j < gridSize; j++) {
                var neighbors = liveNeighbors(j, i);
                if (!grid[i][j] && neighbors == 3) {
                    nextGrid[i][j] = 1;
                } else if (grid[i][j] && (neighbors < 2 || neighbors > 3)) {
                    nextGrid[i][j] = 0;
                } else {
                    nextGrid[i][j] = grid[i][j];
                }
            }
        }

        $scope.grid = nextGrid;
    };
}