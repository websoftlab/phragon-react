import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowUpRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowUpRightIcon = React.forwardRef<SVGSVGElement, TablerCircleArrowUpRightIconProps>(
	function TablerCircleArrowUpRightIcon(props, ref) {
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
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
				<path d="M15 9l-6 6" />
				<path d="M15 15v-6h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleArrowUpRightIcon.displayName = "TablerCircleArrowUpRightIcon";
}
