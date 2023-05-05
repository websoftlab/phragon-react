import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReplyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReplyIcon = React.forwardRef<SVGSVGElement, TablerReplyIconProps>(function TablerReplyIcon(
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
			<path d="M9 17 L4 12 L9 7" />
			<path d="M20 18v-2a4 4 0 0 0-4-4H4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReplyIcon.displayName = "TablerReplyIcon";
}
