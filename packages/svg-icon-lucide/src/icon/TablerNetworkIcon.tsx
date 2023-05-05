import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNetworkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNetworkIcon = React.forwardRef<SVGSVGElement, TablerNetworkIconProps>(function TablerNetworkIcon(
	props,
	ref
) {
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
			<path d="M9 2 H15 V8 H9 V2 z" />
			<path d="M16 16 H22 V22 H16 V16 z" />
			<path d="M2 16 H8 V22 H2 V16 z" />
			<path d="M5 16v-4h14v4" />
			<path d="M12 12V8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNetworkIcon.displayName = "TablerNetworkIcon";
}
