import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLayersDifferenceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLayersDifferenceIcon = React.forwardRef<SVGSVGElement, TablerLayersDifferenceIconProps>(
	function TablerLayersDifferenceIcon(props, ref) {
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
				<path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
				<path d="M10 8l-2 0l0 2" />
				<path d="M8 14l0 2l2 0" />
				<path d="M14 8l2 0l0 2" />
				<path d="M16 14l0 2l-2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLayersDifferenceIcon.displayName = "TablerLayersDifferenceIcon";
}
