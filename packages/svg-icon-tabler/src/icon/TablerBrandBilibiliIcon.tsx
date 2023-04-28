import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBilibiliIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBilibiliIcon = React.forwardRef<SVGSVGElement, TablerBrandBilibiliIconProps>(
	function TablerBrandBilibiliIcon(props, ref) {
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
				<path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6z" />
				<path d="M8 3l2 3" />
				<path d="M16 3l-2 3" />
				<path d="M9 13v-2" />
				<path d="M15 11v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBilibiliIcon.displayName = "TablerBrandBilibiliIcon";
}
