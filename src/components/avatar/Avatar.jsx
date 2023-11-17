import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Model(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF('/myAvatar3.glb');
	const { actions } = useAnimations(animations, group);

	useEffect(() => {
		actions.StandingIdle.play();
	})

	return (
		<group ref={group} {...props} position={[-0.175, 0.25, 3]} dispose={null}>
			<group name="Scene">
				<group name="ME" >
					<primitive object={nodes.Hips} />
					<skinnedMesh
						name="Wolf3D_Avatar"
						geometry={nodes.Wolf3D_Avatar.geometry}
						material={materials.Wolf3D_Avatar}
						skeleton={nodes.Wolf3D_Avatar.skeleton}
						morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
						morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
					/>
				</group>
			</group>
		</group>
	);
}
useGLTF.preload('/myAvatar3.glb');

const Avatar = props => {
	return (
		<Suspense fallback={null}>
			<Model {...props} />
		</Suspense>
	);
};

export default Avatar;
