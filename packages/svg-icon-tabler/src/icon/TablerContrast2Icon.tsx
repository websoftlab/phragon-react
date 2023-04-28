import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerContrast2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerContrast2Icon = React.forwardRef<SVGSVGElement, TablerContrast2IconProps>(
	function TablerContrast2Icon(props, ref) {
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
				<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
				<path d="M4 18h2a6 6 0 0 0 6 -6a6 6 0 0 1 6 -6h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerContrast2Icon.displayName = "TablerContrast2Icon";
}
