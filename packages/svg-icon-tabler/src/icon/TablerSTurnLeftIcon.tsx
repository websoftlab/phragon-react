import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSTurnLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSTurnLeftIcon = React.forwardRef<SVGSVGElement, TablerSTurnLeftIconProps>(
	function TablerSTurnLeftIcon(props, ref) {
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
				<path d="M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
				<path d="M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5" />
				<path d="M6 16l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSTurnLeftIcon.displayName = "TablerSTurnLeftIcon";
}
