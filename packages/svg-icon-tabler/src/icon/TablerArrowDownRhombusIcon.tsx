import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowDownRhombusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowDownRhombusIcon = React.forwardRef<SVGSVGElement, TablerArrowDownRhombusIconProps>(
	function TablerArrowDownRhombusIcon(props, ref) {
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
				<path d="M12 8v13" />
				<path d="M15 18l-3 3l-3 -3" />
				<path d="M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowDownRhombusIcon.displayName = "TablerArrowDownRhombusIcon";
}
