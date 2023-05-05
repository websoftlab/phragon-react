import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuilding2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuilding2Icon = React.forwardRef<SVGSVGElement, TablerBuilding2IconProps>(
	function TablerBuilding2Icon(props, ref) {
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
				<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
				<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
				<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
				<path d="M10 6h4" />
				<path d="M10 10h4" />
				<path d="M10 14h4" />
				<path d="M10 18h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuilding2Icon.displayName = "TablerBuilding2Icon";
}
