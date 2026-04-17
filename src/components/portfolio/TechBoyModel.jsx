import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function TechBoyModel() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.5, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    // ✅ clear previous
    mount.innerHTML = "";
    mount.appendChild(renderer.domElement);

    // 🔥 LIGHTS
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0x6699ff, 2);
    dirLight.position.set(3, 5, 4);
    scene.add(dirLight);

    const cyanLight = new THREE.PointLight(0x00eeff, 1.5, 10);
    cyanLight.position.set(2, 2, 2);
    scene.add(cyanLight);

    // 🔥 GROUP (FULL BODY)
    const body = new THREE.Group();
    scene.add(body);

    // ── HEAD ──
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xd4956a })
    );
    head.position.y = 1.8;
    body.add(head);

    // eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

    [-0.12, 0.12].forEach((x) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), eyeMat);
      eye.position.set(x, 1.8, 0.35);
      body.add(eye);

      const pupil = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 16, 16),
        pupilMat
      );
      pupil.position.set(x, 1.8, 0.42);
      body.add(pupil);
    });

    // ── BODY ──
    const torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x2244aa })
    );
    torso.position.y = 0.8;
    body.add(torso);

    // ── ARMS ──
    const armMat = new THREE.MeshStandardMaterial({ color: 0xd4956a });

    const leftArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16),
      armMat
    );
    leftArm.position.set(-0.7, 0.8, 0);
    leftArm.rotation.z = 1;
    body.add(leftArm);

    const rightArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.8, 16),
      armMat
    );
    rightArm.position.set(0.7, 0.8, 0);
    rightArm.rotation.z = -1;
    body.add(rightArm);

    // ── LEGS ──
    const legMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e });

    const leftLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 1, 16),
      legMat
    );
    leftLeg.position.set(-0.25, -0.2, 0);
    body.add(leftLeg);

    const rightLeg = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 1, 16),
      legMat
    );
    rightLeg.position.set(0.25, -0.2, 0);
    body.add(rightLeg);

    // 🔥 FLOATING TECH ORBS
    const orbs = [];
    const colors = [0x4488ff, 0xaa44ff, 0x00ddff];

    for (let i = 0; i < 3; i++) {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 16, 16),
        new THREE.MeshStandardMaterial({
          color: colors[i],
          emissive: colors[i],
          emissiveIntensity: 0.7,
        })
      );
      scene.add(orb);
      orbs.push({ orb, angle: (i / 3) * Math.PI * 2 });
    }

    // 🔥 ANIMATION
    let frameId;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.02;

      // body floating
      body.position.y = Math.sin(t) * 0.1;

      // rotation
      body.rotation.y += 0.01;

      // arms wave
      leftArm.rotation.z = 1 + Math.sin(t * 2) * 0.2;
      rightArm.rotation.z = -1 + Math.sin(t * 2 + 1) * 0.2;

      // orbs rotate
      orbs.forEach((o) => {
        o.angle += 0.02;
        o.orb.position.x = Math.cos(o.angle) * 2;
        o.orb.position.z = Math.sin(o.angle) * 2;
        o.orb.position.y = 1 + Math.sin(t + o.angle) * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 🔥 RESIZE FIX
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="w-full flex flex-col items-center"
    >
      <div
        ref={mountRef}
        className="w-full bg-black rounded-2xl"
        style={{ height: "420px" }}
      />
    </motion.div>
  );
}