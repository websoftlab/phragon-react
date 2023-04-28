import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHistoryOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHistoryOffIcon = React.forwardRef<SVGSVGElement, TablerHistoryOffIconProps>(
	function TablerHistoryOffIcon(props, ref) {
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
				<path d="M3.05 11a8.975 8.975 0 0 1 2.54 -5.403m2.314 -1.697a9 9 0 0 1 12.113 12.112m-1.695 2.312a9 9 0 0 1 -14.772 -3.324m-.5 5v-5h5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHistoryOffIcon.displayName = "TablerHistoryOffIcon";
}
