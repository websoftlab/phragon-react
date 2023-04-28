import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChessQueenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChessQueenIcon = React.forwardRef<SVGSVGElement, TablerChessQueenIconProps>(
	function TablerChessQueenIcon(props, ref) {
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
				<path d="M16 16l2 -11l-4 4l-2 -5l-2 5l-4 -4l2 11" />
				<path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
				<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M18 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChessQueenIcon.displayName = "TablerChessQueenIcon";
}
