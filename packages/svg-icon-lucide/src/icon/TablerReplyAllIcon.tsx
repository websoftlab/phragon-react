import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerReplyAllIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerReplyAllIcon = React.forwardRef<SVGSVGElement, TablerReplyAllIconProps>(function TablerReplyAllIcon(
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
			<path d="M7 17 L2 12 L7 7" />
			<path d="M12 17 L7 12 L12 7" />
			<path d="M22 18v-2a4 4 0 0 0-4-4H7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerReplyAllIcon.displayName = "TablerReplyAllIcon";
}
