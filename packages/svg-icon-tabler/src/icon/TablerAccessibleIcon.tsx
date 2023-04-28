import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAccessibleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAccessibleIcon = React.forwardRef<SVGSVGElement, TablerAccessibleIconProps>(
	function TablerAccessibleIcon(props, ref) {
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
				<path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" />
				<path d="M11.5,7.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAccessibleIcon.displayName = "TablerAccessibleIcon";
}
