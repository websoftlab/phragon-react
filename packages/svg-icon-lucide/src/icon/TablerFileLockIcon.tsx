import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileLockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileLockIcon = React.forwardRef<SVGSVGElement, TablerFileLockIconProps>(function TablerFileLockIcon(
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
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M9 12 H15 A1 1 0 0 1 16 13 V17 A1 1 0 0 1 15 18 H9 A1 1 0 0 1 8 17 V13 A1 1 0 0 1 9 12 z" />
			<path d="M15 12v-2a3 3 0 1 0-6 0v2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileLockIcon.displayName = "TablerFileLockIcon";
}
