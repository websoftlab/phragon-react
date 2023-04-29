import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherUmbrellaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherUmbrellaIcon = React.forwardRef<SVGSVGElement, FeatherUmbrellaIconProps>(
	function FeatherUmbrellaIcon(props, ref) {
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
				<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherUmbrellaIcon.displayName = "FeatherUmbrellaIcon";
}
