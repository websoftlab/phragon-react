import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLoadBalancerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLoadBalancerIcon = React.forwardRef<SVGSVGElement, TablerLoadBalancerIconProps>(
	function TablerLoadBalancerIcon(props, ref) {
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
				<path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 16v3" />
				<path d="M12 10v-7" />
				<path d="M9 6l3 -3l3 3" />
				<path d="M12 10v-7" />
				<path d="M9 6l3 -3l3 3" />
				<path d="M14.894 12.227l6.11 -2.224" />
				<path d="M17.159 8.21l3.845 1.793l-1.793 3.845" />
				<path d="M9.101 12.214l-6.075 -2.211" />
				<path d="M6.871 8.21l-3.845 1.793l1.793 3.845" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLoadBalancerIcon.displayName = "TablerLoadBalancerIcon";
}
