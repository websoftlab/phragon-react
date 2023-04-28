import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowUpRhombusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowUpRhombusIcon = React.forwardRef<SVGSVGElement, TablerArrowUpRhombusIconProps>(
	function TablerArrowUpRhombusIcon(props, ref) {
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
				<path d="M12 16v-13" />
				<path d="M15 6l-3 -3l-3 3" />
				<path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowUpRhombusIcon.displayName = "TablerArrowUpRhombusIcon";
}
