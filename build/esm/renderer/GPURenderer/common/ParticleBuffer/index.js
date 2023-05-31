import { ATTRIBUTE_TO_SIZE_MAP, DEFAULT_MAX_PARTICLES, PARTICLE_BYTE_SIZE } from './constants';
let THREE;
/**
 * Creates and provides performant buffers for mapping particle properties to geometry vertices.
 *
 * @author thrax <manthrax@gmail.com>
 * @author rohan-deshpande <rohan@creativelifeform.com>
 * @see https://threejs.org/examples/?q=buffe#webgl_buffergeometry_points_interleaved
 * @see https://threejs.org/examples/?q=points#webgl_custom_attributes_points
 */

export default class ParticleBuffer {
  constructor(maxParticles = DEFAULT_MAX_PARTICLES, three) {
    THREE = three;
    this.maxParticles = maxParticles;
    this.createInterleavedBuffer().createBufferGeometry();
  }
  /**
   * Creates the interleaved buffer that will be used to write data to the GPU.
   *
   * @return {ParticleBuffer}
   */


  createInterleavedBuffer() {
    const arrayBuffer = new ArrayBuffer(this.maxParticles * PARTICLE_BYTE_SIZE);
    this.interleavedBuffer = new THREE.InterleavedBuffer(new Float32Array(arrayBuffer), PARTICLE_BYTE_SIZE); // this.interleavedBuffer.usage = THREE.DynamicDrawUsage;

    return this;
  }
  /**
   * Sets the geometry's buffer attributes.
   *
   * NOTE Each attribute needs to be set at the right index in the buffer right after the previous
   * attribute that occupies a set amount of size in the buffer.
   *
   * @return {ParticleBufferGeometry}
   */


  createBufferGeometry() {
    this.geometry = new THREE.BufferGeometry();
    const {
      interleavedBuffer,
      geometry
    } = this;
    Object.keys(ATTRIBUTE_TO_SIZE_MAP).reduce((offset, attribute) => {
      const size = ATTRIBUTE_TO_SIZE_MAP[attribute];
      geometry.setAttribute(attribute, new THREE.InterleavedBufferAttribute(interleavedBuffer, size, offset));
      return offset += size;
    }, 0);
    return this;
  }
  /**
   * Gets the publicly accessible interleaved buffer.
   *
   * @return {THREE.InterleavedBuffer} buffers - The interleaved buffer
   */


  get buffer() {
    return this.interleavedBuffer;
  }

  get stride() {
    return PARTICLE_BYTE_SIZE;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9HUFVSZW5kZXJlci9jb21tb24vUGFydGljbGVCdWZmZXIvaW5kZXguanMiXSwibmFtZXMiOlsiQVRUUklCVVRFX1RPX1NJWkVfTUFQIiwiREVGQVVMVF9NQVhfUEFSVElDTEVTIiwiUEFSVElDTEVfQllURV9TSVpFIiwiVEhSRUUiLCJQYXJ0aWNsZUJ1ZmZlciIsImNvbnN0cnVjdG9yIiwibWF4UGFydGljbGVzIiwidGhyZWUiLCJjcmVhdGVJbnRlcmxlYXZlZEJ1ZmZlciIsImNyZWF0ZUJ1ZmZlckdlb21ldHJ5IiwiYXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImludGVybGVhdmVkQnVmZmVyIiwiSW50ZXJsZWF2ZWRCdWZmZXIiLCJGbG9hdDMyQXJyYXkiLCJnZW9tZXRyeSIsIkJ1ZmZlckdlb21ldHJ5IiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm9mZnNldCIsImF0dHJpYnV0ZSIsInNpemUiLCJzZXRBdHRyaWJ1dGUiLCJJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSIsImJ1ZmZlciIsInN0cmlkZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FDRUEscUJBREYsRUFFRUMscUJBRkYsRUFHRUMsa0JBSEYsUUFJTyxhQUpQO0FBTUEsSUFBSUMsS0FBSjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZUFBZSxNQUFNQyxjQUFOLENBQXFCO0FBQ2xDQyxFQUFBQSxXQUFXLENBQUNDLFlBQVksR0FBR0wscUJBQWhCLEVBQXVDTSxLQUF2QyxFQUE4QztBQUN2REosSUFBQUEsS0FBSyxHQUFHSSxLQUFSO0FBQ0EsU0FBS0QsWUFBTCxHQUFvQkEsWUFBcEI7QUFFQSxTQUFLRSx1QkFBTCxHQUErQkMsb0JBQS9CO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRUQsRUFBQUEsdUJBQXVCLEdBQUc7QUFDeEIsVUFBTUUsV0FBVyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsS0FBS0wsWUFBTCxHQUFvQkosa0JBQXBDLENBQXBCO0FBRUEsU0FBS1UsaUJBQUwsR0FBeUIsSUFBSVQsS0FBSyxDQUFDVSxpQkFBVixDQUN2QixJQUFJQyxZQUFKLENBQWlCSixXQUFqQixDQUR1QixFQUV2QlIsa0JBRnVCLENBQXpCLENBSHdCLENBT3hCOztBQUVBLFdBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VPLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFNBQUtNLFFBQUwsR0FBZ0IsSUFBSVosS0FBSyxDQUFDYSxjQUFWLEVBQWhCO0FBRUEsVUFBTTtBQUFFSixNQUFBQSxpQkFBRjtBQUFxQkcsTUFBQUE7QUFBckIsUUFBa0MsSUFBeEM7QUFFQUUsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixxQkFBWixFQUFtQ21CLE1BQW5DLENBQTBDLENBQUNDLE1BQUQsRUFBU0MsU0FBVCxLQUF1QjtBQUMvRCxZQUFNQyxJQUFJLEdBQUd0QixxQkFBcUIsQ0FBQ3FCLFNBQUQsQ0FBbEM7QUFFQU4sTUFBQUEsUUFBUSxDQUFDUSxZQUFULENBQ0VGLFNBREYsRUFFRSxJQUFJbEIsS0FBSyxDQUFDcUIsMEJBQVYsQ0FBcUNaLGlCQUFyQyxFQUF3RFUsSUFBeEQsRUFBOERGLE1BQTlELENBRkY7QUFLQSxhQUFRQSxNQUFNLElBQUlFLElBQWxCO0FBQ0QsS0FURCxFQVNHLENBVEg7QUFXQSxXQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztBQUNZLE1BQU5HLE1BQU0sR0FBRztBQUNYLFdBQU8sS0FBS2IsaUJBQVo7QUFDRDs7QUFFUyxNQUFOYyxNQUFNLEdBQUc7QUFDWCxXQUFPeEIsa0JBQVA7QUFDRDs7QUEvRGlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVRUUklCVVRFX1RPX1NJWkVfTUFQLFxuICBERUZBVUxUX01BWF9QQVJUSUNMRVMsXG4gIFBBUlRJQ0xFX0JZVEVfU0laRSxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5sZXQgVEhSRUU7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcHJvdmlkZXMgcGVyZm9ybWFudCBidWZmZXJzIGZvciBtYXBwaW5nIHBhcnRpY2xlIHByb3BlcnRpZXMgdG8gZ2VvbWV0cnkgdmVydGljZXMuXG4gKlxuICogQGF1dGhvciB0aHJheCA8bWFudGhyYXhAZ21haWwuY29tPlxuICogQGF1dGhvciByb2hhbi1kZXNocGFuZGUgPHJvaGFuQGNyZWF0aXZlbGlmZWZvcm0uY29tPlxuICogQHNlZSBodHRwczovL3RocmVlanMub3JnL2V4YW1wbGVzLz9xPWJ1ZmZlI3dlYmdsX2J1ZmZlcmdlb21ldHJ5X3BvaW50c19pbnRlcmxlYXZlZFxuICogQHNlZSBodHRwczovL3RocmVlanMub3JnL2V4YW1wbGVzLz9xPXBvaW50cyN3ZWJnbF9jdXN0b21fYXR0cmlidXRlc19wb2ludHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljbGVCdWZmZXIge1xuICBjb25zdHJ1Y3RvcihtYXhQYXJ0aWNsZXMgPSBERUZBVUxUX01BWF9QQVJUSUNMRVMsIHRocmVlKSB7XG4gICAgVEhSRUUgPSB0aHJlZTtcbiAgICB0aGlzLm1heFBhcnRpY2xlcyA9IG1heFBhcnRpY2xlcztcblxuICAgIHRoaXMuY3JlYXRlSW50ZXJsZWF2ZWRCdWZmZXIoKS5jcmVhdGVCdWZmZXJHZW9tZXRyeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIGludGVybGVhdmVkIGJ1ZmZlciB0aGF0IHdpbGwgYmUgdXNlZCB0byB3cml0ZSBkYXRhIHRvIHRoZSBHUFUuXG4gICAqXG4gICAqIEByZXR1cm4ge1BhcnRpY2xlQnVmZmVyfVxuICAgKi9cbiAgY3JlYXRlSW50ZXJsZWF2ZWRCdWZmZXIoKSB7XG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIodGhpcy5tYXhQYXJ0aWNsZXMgKiBQQVJUSUNMRV9CWVRFX1NJWkUpO1xuXG4gICAgdGhpcy5pbnRlcmxlYXZlZEJ1ZmZlciA9IG5ldyBUSFJFRS5JbnRlcmxlYXZlZEJ1ZmZlcihcbiAgICAgIG5ldyBGbG9hdDMyQXJyYXkoYXJyYXlCdWZmZXIpLFxuICAgICAgUEFSVElDTEVfQllURV9TSVpFXG4gICAgKTtcbiAgICAvLyB0aGlzLmludGVybGVhdmVkQnVmZmVyLnVzYWdlID0gVEhSRUUuRHluYW1pY0RyYXdVc2FnZTtcbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBnZW9tZXRyeSdzIGJ1ZmZlciBhdHRyaWJ1dGVzLlxuICAgKlxuICAgKiBOT1RFIEVhY2ggYXR0cmlidXRlIG5lZWRzIHRvIGJlIHNldCBhdCB0aGUgcmlnaHQgaW5kZXggaW4gdGhlIGJ1ZmZlciByaWdodCBhZnRlciB0aGUgcHJldmlvdXNcbiAgICogYXR0cmlidXRlIHRoYXQgb2NjdXBpZXMgYSBzZXQgYW1vdW50IG9mIHNpemUgaW4gdGhlIGJ1ZmZlci5cbiAgICpcbiAgICogQHJldHVybiB7UGFydGljbGVCdWZmZXJHZW9tZXRyeX1cbiAgICovXG4gIGNyZWF0ZUJ1ZmZlckdlb21ldHJ5KCkge1xuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblxuICAgIGNvbnN0IHsgaW50ZXJsZWF2ZWRCdWZmZXIsIGdlb21ldHJ5IH0gPSB0aGlzO1xuXG4gICAgT2JqZWN0LmtleXMoQVRUUklCVVRFX1RPX1NJWkVfTUFQKS5yZWR1Y2UoKG9mZnNldCwgYXR0cmlidXRlKSA9PiB7XG4gICAgICBjb25zdCBzaXplID0gQVRUUklCVVRFX1RPX1NJWkVfTUFQW2F0dHJpYnV0ZV07XG5cbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcbiAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICBuZXcgVEhSRUUuSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUoaW50ZXJsZWF2ZWRCdWZmZXIsIHNpemUsIG9mZnNldClcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAob2Zmc2V0ICs9IHNpemUpO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgcHVibGljbHkgYWNjZXNzaWJsZSBpbnRlcmxlYXZlZCBidWZmZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge1RIUkVFLkludGVybGVhdmVkQnVmZmVyfSBidWZmZXJzIC0gVGhlIGludGVybGVhdmVkIGJ1ZmZlclxuICAgKi9cbiAgZ2V0IGJ1ZmZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmxlYXZlZEJ1ZmZlcjtcbiAgfVxuXG4gIGdldCBzdHJpZGUoKSB7XG4gICAgcmV0dXJuIFBBUlRJQ0xFX0JZVEVfU0laRTtcbiAgfVxufVxuIl19