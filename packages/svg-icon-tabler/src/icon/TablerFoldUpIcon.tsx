import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFoldUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFoldUpIcon = React.forwardRef<SVGSVGElement, TablerFoldUpIconProps>(function TablerFoldUpIcon(
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
			<path d="M12 13v-8l-3 3m6 0l-3 -3" />
			<path d="M9 17l1 0" />
			<path d="M14 17l1 0" />
			<path d="M19 17l1 0" />
			<path d="M4 17l1 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFoldUpIcon.displayName = "TablerFoldUpIcon";
}
