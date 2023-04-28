import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrendingDown2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrendingDown2Icon = React.forwardRef<SVGSVGElement, TablerTrendingDown2IconProps>(
	function TablerTrendingDown2Icon(props, ref) {
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
				<path d="M3 6h5l7 10h6" />
				<path d="M18 19l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTrendingDown2Icon.displayName = "TablerTrendingDown2Icon";
}
