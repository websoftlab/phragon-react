import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandXboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandXboxIcon = React.forwardRef<SVGSVGElement, TablerBrandXboxIconProps>(
	function TablerBrandXboxIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
				<path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandXboxIcon.displayName = "TablerBrandXboxIcon";
}
