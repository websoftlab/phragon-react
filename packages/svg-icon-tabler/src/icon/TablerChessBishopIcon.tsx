import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChessBishopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChessBishopIcon = React.forwardRef<SVGSVGElement, TablerChessBishopIconProps>(
	function TablerChessBishopIcon(props, ref) {
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
				<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M9.5 16c-1.667 0 -2.5 -1.669 -2.5 -3c0 -3.667 1.667 -6 5 -7c3.333 1 5 3.427 5 7c0 1.284 -.775 2.881 -2.325 3l-.175 0h-5z" />
				<path d="M15 8l-3 3" />
				<path d="M12 5v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChessBishopIcon.displayName = "TablerChessBishopIcon";
}
