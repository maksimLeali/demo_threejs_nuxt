import * as THREE from 'three'
import { bindAll } from 'lodash-es';
import OrbitControls from 'threejs-orbit-controls';
import { EventBus } from "~/assets/js/utils/event.js";
  
export default class MaksStage {
    constructor(options={}){
        this.addListeners();
        this.init();
    }

    init() {    
        /* Init renderer and canvas */
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement)
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight, 0.1, 1000
        )
        // this.orbit = new THREE.(this.camera, this.renderer.domElement)
        this.orbit = new OrbitControls(this.camera, this.renderer.domElement)
        this.camera.position.set(-10, 30, 30 );
        this.orbit.update()

        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);

        const planeGeometry = new  THREE.PlaneGeometry(30, 30)
        const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide})
        this.plane = new THREE.Mesh(planeGeometry, planeMaterial)
        this.plane.rotation.x = -.5* Math.PI;
        this.scene.add(this.plane)

        this.gridHelper = new THREE.GridHelper(30, 20)
        this.scene.add(this.gridHelper)
    
        const sphereGeometry = new THREE.SphereGeometry(4, 50, 50)
        const sphereMaterial = new THREE.MeshStandardMaterial({color: 0x55F455})
        this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        this.scene.add(this.sphere)
            
        this.sphere.position.x=10;
        this.sphere.position.y= 10;
        const boxGeometry  = new THREE.BoxGeometry()
        const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
        this.box = new THREE.Mesh(boxGeometry, boxMaterial)
        this.scene.add(this.box);
        
        this.renderer.setAnimationLoop(this.animate)
        
    }

    animate(time){
        this.box.rotation.x = time/1000;
        this.box.rotation.y = time/1000;
        this.renderer.render(this.scene,this.camera);
    }

    addListeners() {
        bindAll(this, ["animate", "onResize"]);
        EventBus.$on("ON_RESIZE", this.onResize);
      }

      onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      }
    
    //   render({ mouse }) {
    //     if (this.currentTarget) {
    //       this.currentTarget.rotation.x += 0.01;
    //       this.currentTarget.rotation.y += 0.01;
    //     }
    
    //     this.renderer.clear();
    //     this.renderer.render(this.scene, this.camera);
    //   }
}