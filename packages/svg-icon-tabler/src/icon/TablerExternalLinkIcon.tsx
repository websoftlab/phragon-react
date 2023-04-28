import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExternalLinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExternalLinkIcon = React.forwardRef<SVGSVGElement, TablerExternalLinkIconProps>(
	function TablerExternalLinkIcon(props, ref) {
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
				<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
				<path d="M11 13l9 -9" />
				<path d="M15 4h5v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExternalLinkIcon.displayName = "TablerExternalLinkIcon";
}
