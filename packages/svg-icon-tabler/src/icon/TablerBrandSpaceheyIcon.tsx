import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSpaceheyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSpaceheyIcon = React.forwardRef<SVGSVGElement, TablerBrandSpaceheyIconProps>(
	function TablerBrandSpaceheyIcon(props, ref) {
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
				<path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M14 20h6v-6a3 3 0 0 0 -6 0v6z" />
				<path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSpaceheyIcon.displayName = "TablerBrandSpaceheyIcon";
}
