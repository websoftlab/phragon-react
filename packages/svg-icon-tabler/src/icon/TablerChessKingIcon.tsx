import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChessKingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChessKingIcon = React.forwardRef<SVGSVGElement, TablerChessKingIconProps>(
	function TablerChessKingIcon(props, ref) {
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
				<path d="M8.5 16a3.5 3.5 0 1 1 3.163 -5h.674a3.5 3.5 0 1 1 3.163 5z" />
				<path d="M9 6h6" />
				<path d="M12 3v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChessKingIcon.displayName = "TablerChessKingIcon";
}
