import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTridentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTridentIcon = React.forwardRef<SVGSVGElement, TablerTridentIconProps>(function TablerTridentIcon(
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
			<path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
			<path d="M12 21v-18l-2 2m4 0l-2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTridentIcon.displayName = "TablerTridentIcon";
}
