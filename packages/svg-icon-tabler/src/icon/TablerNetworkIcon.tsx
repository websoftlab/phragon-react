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
			<path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
			<path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
			<path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
			<path d="M6 9h12" />
			<path d="M3 19h7" />
			<path d="M14 19h7" />
			<path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 15v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNetworkIcon.displayName = "TablerNetworkIcon";
}
