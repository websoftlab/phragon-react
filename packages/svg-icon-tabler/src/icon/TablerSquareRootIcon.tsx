import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRootIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRootIcon = React.forwardRef<SVGSVGElement, TablerSquareRootIconProps>(
	function TablerSquareRootIcon(props, ref) {
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
				<path d="M3 12h2l4 8l4 -16h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareRootIcon.displayName = "TablerSquareRootIcon";
}
