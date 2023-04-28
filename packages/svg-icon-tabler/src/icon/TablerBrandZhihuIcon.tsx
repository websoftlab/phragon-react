import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandZhihuIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandZhihuIcon = React.forwardRef<SVGSVGElement, TablerBrandZhihuIconProps>(
	function TablerBrandZhihuIcon(props, ref) {
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
				<path d="M14 6h6v12h-2l-2 2l-1 -2h-1z" />
				<path d="M4 12h6.5" />
				<path d="M10.5 6h-5" />
				<path d="M6 4c-.5 2.5 -1.5 3.5 -2.5 4.5" />
				<path d="M8 6v7c0 4.5 -2 5.5 -4 7" />
				<path d="M11 18l-3 -5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandZhihuIcon.displayName = "TablerBrandZhihuIcon";
}
