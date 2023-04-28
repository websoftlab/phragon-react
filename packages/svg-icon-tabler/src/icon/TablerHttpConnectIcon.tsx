import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpConnectIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpConnectIcon = React.forwardRef<SVGSVGElement, TablerHttpConnectIconProps>(
	function TablerHttpConnectIcon(props, ref) {
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
				<path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
				<path d="M17 16v-8l4 8v-8" />
				<path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHttpConnectIcon.displayName = "TablerHttpConnectIcon";
}
