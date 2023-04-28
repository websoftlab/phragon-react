import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExposure0IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExposure0Icon = React.forwardRef<SVGSVGElement, TablerExposure0IconProps>(
	function TablerExposure0Icon(props, ref) {
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
				<path d="M12 19a4 4 0 0 0 4 -4v-6a4 4 0 1 0 -8 0v6a4 4 0 0 0 4 4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExposure0Icon.displayName = "TablerExposure0Icon";
}
