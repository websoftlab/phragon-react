import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPentagonOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPentagonOffIcon = React.forwardRef<SVGSVGElement, TablerPentagonOffIconProps>(
	function TablerPentagonOffIcon(props, ref) {
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
				<path d="M8.868 4.857l1.936 -1.457a2 2 0 0 1 2.397 0l7.032 5.237a2 2 0 0 1 .7 2.247l-1.522 4.485m-1.027 3.029l-.424 1.25a2 2 0 0 1 -1.894 1.358h-8.12a2 2 0 0 1 -1.9 -1.373l-2.896 -8.765a2 2 0 0 1 .696 -2.225l2.736 -2.06" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPentagonOffIcon.displayName = "TablerPentagonOffIcon";
}
