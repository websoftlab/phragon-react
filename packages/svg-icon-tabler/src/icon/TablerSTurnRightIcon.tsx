import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSTurnRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSTurnRightIcon = React.forwardRef<SVGSVGElement, TablerSTurnRightIconProps>(
	function TablerSTurnRightIcon(props, ref) {
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
				<path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5" />
				<path d="M18 16l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSTurnRightIcon.displayName = "TablerSTurnRightIcon";
}
