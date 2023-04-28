import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDiagonal2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDiagonal2Icon = React.forwardRef<SVGSVGElement, TablerArrowsDiagonal2IconProps>(
	function TablerArrowsDiagonal2Icon(props, ref) {
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
				<path d="M16 20l4 0l0 -4" />
				<path d="M14 14l6 6" />
				<path d="M8 4l-4 0l0 4" />
				<path d="M4 4l6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDiagonal2Icon.displayName = "TablerArrowsDiagonal2Icon";
}
