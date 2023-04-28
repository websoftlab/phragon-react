import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLoomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLoomIcon = React.forwardRef<SVGSVGElement, TablerBrandLoomIconProps>(
	function TablerBrandLoomIcon(props, ref) {
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
				<path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
				<path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
				<path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
				<path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLoomIcon.displayName = "TablerBrandLoomIcon";
}
