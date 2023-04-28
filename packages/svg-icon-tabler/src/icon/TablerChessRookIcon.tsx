import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChessRookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChessRookIcon = React.forwardRef<SVGSVGElement, TablerChessRookIconProps>(
	function TablerChessRookIcon(props, ref) {
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
				<path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
				<path d="M8 16l1 -9h6l1 9" />
				<path d="M6 4l.5 3h11l.5 -3" />
				<path d="M10 4v3" />
				<path d="M14 4v3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChessRookIcon.displayName = "TablerChessRookIcon";
}
