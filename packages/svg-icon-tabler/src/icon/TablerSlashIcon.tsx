import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSlashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSlashIcon = React.forwardRef<SVGSVGElement, TablerSlashIconProps>(function TablerSlashIcon(
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
			<path d="M17 5l-10 14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSlashIcon.displayName = "TablerSlashIcon";
}
