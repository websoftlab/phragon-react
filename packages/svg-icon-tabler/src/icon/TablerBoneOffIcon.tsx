import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoneOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoneOffIcon = React.forwardRef<SVGSVGElement, TablerBoneOffIconProps>(function TablerBoneOffIcon(
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
			<path d="M12.5 8.502l.38 -.38a3 3 0 1 1 5.12 -2.122a3 3 0 1 1 -2.12 5.122l-.372 .372m-2.008 2.008l-2.378 2.378a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l2.378 -2.378" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoneOffIcon.displayName = "TablerBoneOffIcon";
}
