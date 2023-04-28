import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAffiliateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAffiliateIcon = React.forwardRef<SVGSVGElement, TablerAffiliateIconProps>(
	function TablerAffiliateIcon(props, ref) {
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
				<path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
				<path d="M11.683 12.317l5.759 -5.759" />
				<path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
				<path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAffiliateIcon.displayName = "TablerAffiliateIcon";
}
