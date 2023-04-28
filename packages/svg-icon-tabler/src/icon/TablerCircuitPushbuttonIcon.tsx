import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitPushbuttonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitPushbuttonIcon = React.forwardRef<SVGSVGElement, TablerCircuitPushbuttonIconProps>(
	function TablerCircuitPushbuttonIcon(props, ref) {
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
				<path d="M2 17h2" />
				<path d="M20 17h2" />
				<path d="M6 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 11h12" />
				<path d="M12 11v-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitPushbuttonIcon.displayName = "TablerCircuitPushbuttonIcon";
}
