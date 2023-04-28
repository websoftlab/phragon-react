import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerButterflyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerButterflyIcon = React.forwardRef<SVGSVGElement, TablerButterflyIconProps>(
	function TablerButterflyIcon(props, ref) {
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
				<path d="M12 18.176a3 3 0 1 1 -4.953 -2.449l-.025 .023a4.502 4.502 0 0 1 1.483 -8.75c1.414 0 2.675 .652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079a3 3 0 1 1 -4.983 2.25z" />
				<path d="M12 19v-10" />
				<path d="M9 3l3 2l3 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerButterflyIcon.displayName = "TablerButterflyIcon";
}
