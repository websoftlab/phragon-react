import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleArrowUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleArrowUpIcon = React.forwardRef<SVGSVGElement, TablerCircleArrowUpIconProps>(
	function TablerCircleArrowUpIcon(props, ref) {
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
				<path d="M12 8l-4 4" />
				<path d="M12 8v8" />
				<path d="M16 12l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleArrowUpIcon.displayName = "TablerCircleArrowUpIcon";
}
