import { Euler, Vector3 } from '../core/three/';
export default class Vector3D extends Vector3 {
  clear() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    return this;
  }

  scalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  addValue(a, b, c) {
    this.x += a;
    this.y += b;
    this.z += c;
    return this;
  }

  toString() {
    return 'x:' + this.x + 'y:' + this.y + 'z:' + this.z;
  }

  eulerFromDir(vector3D) {
    const euler = new Euler();
    return euler.setFromVector3(vector3D);
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL1ZlY3RvcjNELmpzIl0sIm5hbWVzIjpbIkV1bGVyIiwiVmVjdG9yMyIsIlZlY3RvcjNEIiwiY2xlYXIiLCJ4IiwieSIsInoiLCJzY2FsYXIiLCJzIiwiYWRkVmFsdWUiLCJhIiwiYiIsImMiLCJ0b1N0cmluZyIsImV1bGVyRnJvbURpciIsInZlY3RvcjNEIiwiZXVsZXIiLCJzZXRGcm9tVmVjdG9yMyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsS0FBVCxFQUFnQkMsT0FBaEIsUUFBK0IsZ0JBQS9CO0FBRUEsZUFBZSxNQUFNQyxRQUFOLFNBQXVCRCxPQUF2QixDQUErQjtBQUM1Q0UsRUFBQUEsS0FBSyxHQUFHO0FBQ04sU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0MsQ0FBRCxFQUFJO0FBQ1IsU0FBS0osQ0FBTCxJQUFVSSxDQUFWO0FBQ0EsU0FBS0gsQ0FBTCxJQUFVRyxDQUFWO0FBQ0EsU0FBS0YsQ0FBTCxJQUFVRSxDQUFWO0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVTtBQUNoQixTQUFLUixDQUFMLElBQVVNLENBQVY7QUFDQSxTQUFLTCxDQUFMLElBQVVNLENBQVY7QUFDQSxTQUFLTCxDQUFMLElBQVVNLENBQVY7QUFFQSxXQUFPLElBQVA7QUFDRDs7QUFFREMsRUFBQUEsUUFBUSxHQUFHO0FBQ1QsV0FBTyxPQUFPLEtBQUtULENBQVosR0FBZ0IsSUFBaEIsR0FBdUIsS0FBS0MsQ0FBNUIsR0FBZ0MsSUFBaEMsR0FBdUMsS0FBS0MsQ0FBbkQ7QUFDRDs7QUFFRFEsRUFBQUEsWUFBWSxDQUFDQyxRQUFELEVBQVc7QUFDckIsVUFBTUMsS0FBSyxHQUFHLElBQUloQixLQUFKLEVBQWQ7QUFFQSxXQUFPZ0IsS0FBSyxDQUFDQyxjQUFOLENBQXFCRixRQUFyQixDQUFQO0FBQ0Q7O0FBakMyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV1bGVyLCBWZWN0b3IzIH0gZnJvbSAnLi4vY29yZS90aHJlZS8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IzRCBleHRlbmRzIFZlY3RvcjMge1xuICBjbGVhcigpIHtcbiAgICB0aGlzLnggPSAwLjA7XG4gICAgdGhpcy55ID0gMC4wO1xuICAgIHRoaXMueiA9IDAuMDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2NhbGFyKHMpIHtcbiAgICB0aGlzLnggKj0gcztcbiAgICB0aGlzLnkgKj0gcztcbiAgICB0aGlzLnogKj0gcztcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVmFsdWUoYSwgYiwgYykge1xuICAgIHRoaXMueCArPSBhO1xuICAgIHRoaXMueSArPSBiO1xuICAgIHRoaXMueiArPSBjO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ3g6JyArIHRoaXMueCArICd5OicgKyB0aGlzLnkgKyAnejonICsgdGhpcy56O1xuICB9XG5cbiAgZXVsZXJGcm9tRGlyKHZlY3RvcjNEKSB7XG4gICAgY29uc3QgZXVsZXIgPSBuZXcgRXVsZXIoKTtcblxuICAgIHJldHVybiBldWxlci5zZXRGcm9tVmVjdG9yMyh2ZWN0b3IzRCk7XG4gIH1cbn1cbiJdfQ==