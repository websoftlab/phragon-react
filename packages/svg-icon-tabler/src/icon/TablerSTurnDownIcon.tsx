import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSTurnDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSTurnDownIcon = React.forwardRef<SVGSVGElement, TablerSTurnDownIconProps>(
	function TablerSTurnDownIcon(props, ref) {
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
				<path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
				<path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" />
				<path d="M16 18l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSTurnDownIcon.displayName = "TablerSTurnDownIcon";
}
