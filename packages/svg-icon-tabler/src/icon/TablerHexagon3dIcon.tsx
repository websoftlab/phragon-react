import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHexagon3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHexagon3dIcon = React.forwardRef<SVGSVGElement, TablerHexagon3dIconProps>(
	function TablerHexagon3dIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03z" />
				<path d="M12 16.5v4.5" />
				<path d="M4.5 7.5l3.5 2.5" />
				<path d="M16 10l4 -2.5" />
				<path d="M12 7.5v4.5l-4 2" />
				<path d="M12 12l4 2" />
				<path d="M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHexagon3dIcon.displayName = "TablerHexagon3dIcon";
}
