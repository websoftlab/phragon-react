import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTriangleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTriangleOffIcon = React.forwardRef<SVGSVGElement, TablerTriangleOffIconProps>(
	function TablerTriangleOffIcon(props, ref) {
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
				<path d="M5 19h14m1.986 -2.014a2 2 0 0 0 -.146 -.736l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.825 1.424m-1.467 2.53l-4.808 8.296a2 2 0 0 0 1.75 2.75" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTriangleOffIcon.displayName = "TablerTriangleOffIcon";
}
