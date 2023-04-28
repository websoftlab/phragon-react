import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTopologyFullIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTopologyFullIcon = React.forwardRef<SVGSVGElement, TablerTopologyFullIconProps>(
	function TablerTopologyFullIcon(props, ref) {
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
				<path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M6 8v8" />
				<path d="M18 16v-8" />
				<path d="M8 6h8" />
				<path d="M16 18h-8" />
				<path d="M7.5 7.5l9 9" />
				<path d="M7.5 16.5l9 -9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTopologyFullIcon.displayName = "TablerTopologyFullIcon";
}
