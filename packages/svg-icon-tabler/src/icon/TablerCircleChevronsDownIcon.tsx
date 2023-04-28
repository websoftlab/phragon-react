import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleChevronsDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleChevronsDownIcon = React.forwardRef<SVGSVGElement, TablerCircleChevronsDownIconProps>(
	function TablerCircleChevronsDownIcon(props, ref) {
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
				<path d="M15 9l-3 3l-3 -3" />
				<path d="M15 13l-3 3l-3 -3" />
				<path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleChevronsDownIcon.displayName = "TablerCircleChevronsDownIcon";
}
